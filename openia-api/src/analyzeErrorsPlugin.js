import * as esprima from 'esprima';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

export default function analyzeErrorsPlugin(apiKey) {
    const openai = new OpenAI({ apiKey });

    return {
        name: 'analyze-errors-plugin',
        async transform(code, id) {
            console.log(`[AnalyzeErrorsPlugin] Transforming file: ${id}`);
            if (!id.endsWith('.js')) return;

            try {
                esprima.parseScript(code); // Test si le code est valide
                console.log('[AnalyzeErrorsPlugin] No syntax errors found.');
            } catch (error) {
                console.error('[AnalyzeErrorsPlugin] Syntax error detected:', error.message);

        //         const prompt = `
        //   Vous êtes un expert en JavaScript. Voici une erreur : ${error.message}.
        //   Voici le code problématique :
        //   ${code}
        // `;
        //
        //
        //         (async () => {
        //             try {
        //                 const response = await openai.chat.completions.create({
        //                     model: 'gpt-4o-mini',
        //                     messages: [
        //                         { role: 'system', content: 'You are an expert developer in JavaScript.' },
        //                         { role: 'user', content: prompt },
        //                     ],
        //                     max_tokens: 200,
        //                     timeout: 10000,
        //                 });
        //
        //                 console.log('[AnalyzeErrorsPlugin] OpenAI Response:', response.choices[0].message.content);
        //
        //                 const outputDir = path.resolve('error_logs');
        //                 if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
        //                 const fileName = `error-${path.basename(id)}.log`;
        //                 fs.writeFileSync(path.join(outputDir, fileName), response.choices[0].message.content);
        //
        //             } catch (err) {
        //                 console.error('[AnalyzeErrorsPlugin] Error contacting OpenAI:', err.message);
        //             }
        //         })();
            }
            return null;
        },
    };
}
