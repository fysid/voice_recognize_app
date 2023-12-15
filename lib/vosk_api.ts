import * as fs from 'fs';
// @ts-ignore
import { Model, KaldiRecognizer } from 'vosk';


export function recognize (file_path: string, lang: string): string {
    let model_path: string;
    if (lang == 'ru') {
        model_path='vosk_models/ru'
    } else if(lang == 'en') {
        model_path='vosk_models/en_small'
    } else {
        throw new Error(`model lang ${lang} doesn't support`)
    }
    const model = new Model(model_path);

    const AUDIO_FILE = file_path;
    const wf = fs.readFileSync(AUDIO_FILE);

    const rec = new KaldiRecognizer(model, 16000);

    rec.acceptWaveform(wf);
    return rec.result();
};
