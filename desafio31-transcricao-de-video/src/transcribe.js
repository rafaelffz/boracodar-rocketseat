import { pipeline } from '@xenova/transformers'
import { loadingMessage } from './loading'
// import data from './data.json'

let data = null

export async function transcribeAudio() {
  const options = {
    language: 'portuguese',
    task: 'transcribe',
    chunk_length_s: 30,
    stride_length_s: 5,
    return_timestamps: true
  }

  try {
    console.time()
    loadingMessage('Iniciando a transcrição do áudio, por favor aguarde (essa etapa é bem demorada)...')
    console.log('[START_TRANSCRIBE]')

    const transcriber  = await pipeline('automatic-speech-recognition', 'Xenova/whisper-small')
    data = await transcriber('../audio.mp3', options)

  } catch (error) {
    console.log('[ERROR_TRANSCRIBE]', error)
    throw new Error(error)
  } finally {
    console.timeEnd()
    loadingMessage('Transcrição terminada!')
    console.log('[STOP_TRANSCRIBE]')
    return data
  }
}