import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON requests
  app.use(express.json({ limit: '10mb' }));

  // API endpoints go FIRST
  app.post('/api/gemini/feedback', async (req, res) => {
    try {
      const { title, exerciseDescription, content } = req.body;

      if (!content || content.trim().length === 0) {
        return res.status(400).json({ error: 'El contenido para retroalimentación está vacío.' });
      }

      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        // Safe, graceful fallback with rich simulated pedagogical feedback in case the API key is not yet set up
        console.warn('GEMINI_API_KEY environment variable is not defined. Falling back to pedagogical simulator.');
        const simulatedFeedback = `### 🌟 Retroalimentación Pedagógica (Modo Simulado)

*(Nota: Configura tu clave de API de Gemini en la barra de Ajustes > Secretos para habilitar la analítica profunda con Inteligencia Artificial).*

#### **Elogios Específicos & Hallazgos**
* ¡Excelente inicio! Tu prosa demuestra una gran intuición con respecto a la sonoridad de las palabras. Se nota un esfuerzo consciente por evitar las descripciones trilladas y construir con acciones concretas.
* Sostienes una atmósfera interesante. La forma en que presentas la escena capta de forma inmediata la atención del lector, obligándolo a hacerse preguntas sobre el destino de los personajes.

#### **Análisis Técnico de la Clase: "${title}"**
* **Naturalidad y Estilo**: Tu prosa esquiva correctamente el estilo formal administrativo, aunque se identifican pequeños destellos asertivos que se beneficiarían de algunos modalizadores adicionales (ej: *'según creo'*, *'al parecer'*).
* **Visibilidad**: Consigues recrear lo que John Gardner llamaba el "sueño vívido y continuo" amueblando la escena con algunos sustantivos tangibles.

#### **Acciones Cortas de Corrección (Oportunidades de Mejora)**
1. **Alternancia Sintáctica**: Revisa el largo de la tercera y cuarta frase. Prueba a acortarlas para inyectar un ritmo más ágil al clímax.
2. **Evitar lo abstracto**: En lugar de explicarnos la emoción latente, concéntrate de manera absoluta en el comportamiento físico o en las texturas de las superficies circundantes.

#### **Un Empujón Creativo**
* Escribe tres líneas adicionales donde el objeto secundario de tu escena tome el protagonismo físico y cambie de manos de forma inesperada.`;
        return res.json({ feedback: simulatedFeedback });
      }

      // Lazy initialization of GoogleGenAI client as recommended
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      const prompt = `Actúa como un profesor experto y perspicaz de Escritura Creativa, Pedagogía Literaria y Diseño Instruccional.
Vas a analizar el borrador escrito por un estudiante para una clase específica del taller.

Clase/Tema: ${title}
Propuesta de ejercicio: ${exerciseDescription || 'Escritura libre / Proyecto final'}

Texto escrito por el estudiante:
"""
${content}
"""

Tu tarea es dar una retroalimentación detallada, constructiva, inspiratoria y sumamente didáctica en español.
Enfócate estrictamente en los conceptos pedagógicos correspondientes a dicho tema de clase (por ejemplo, si es sobre 'Las palabras', analiza significante y significado; si es de 'Naturalidad', vigila los estilos formal, retórico, enfático, asertivo y el uso de modalizadores; si es de 'Ritmo', analiza sintaxis e hilado; si es de 'Visibilidad', comenta sobre el sueño vívido y continuo de Gardner o la falta de moralizar; si es de 'Escena', habla de la llave de Stanislaw Lem y los objetos conductores; si es de 'Diálogos', el subtexto o el principio de vasos comunicantes).

Por favor, estructura tu respuesta en Markdown elegante siguiendo estos puntos de forma literal:

### 🌟 Retroalimentación de tu Instructor de Escritura

#### **1. Elogios Específicos & Hallazgos**
* Qué funciona excelentemente bien, seleccionando fragmentos literales del estudiante que demuestren fuerza estética o ingenio.

#### **2. Análisis Técnico de la Clase: ${title}**
* Comenta con precisión técnica quirúrgica cómo se aplicaron o esquivaron los conceptos literarios estudiados en esta lección específica.

#### **3. Acciones Cortas de Corrección (Oportunidades de Mejora)**
* Brinda de 1 a 3 correcciones técnicas claras y accionables para pulir el borrador (por ejemplo: 'acorta esta frase', 'sustituye este adjetivo abstracto', 'introduce un modalizador aquí').

#### **4. Un Empujón Creativo**
* Un breve y motivador desafío específico para expandir o retar la imaginación del estudiante.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
      });

      const feedbackText = response.text || 'No se pudo generar retroalimentación en este momento.';
      res.json({ feedback: feedbackText });
    } catch (error: any) {
      console.error('Error in Gemini API route handler:', error);
      res.status(500).json({ error: 'Hubo un error al procesar la retroalimentación: ' + error.message });
    }
  });

  // Vite integration as middleware context
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Share production builds
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
