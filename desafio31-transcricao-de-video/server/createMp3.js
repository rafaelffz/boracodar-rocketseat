import ffmpegStatic from 'ffmpeg-static'
import ffmpeg from 'fluent-ffmpeg'

export const createMP3 = () => new Promise((resolve, reject) => {
  ffmpeg.setFfmpegPath(ffmpegStatic);

  ffmpeg()

    .input('audio.mp4')

    .outputOptions('-ab', '20k')

    .saveToFile('audio.mp3')

    .on('end', () => {
      console.log('Áudio convertido com sucesso!');
      resolve()
    })

    .on('error', (error) => {
      console.error(error);
      reject(error)
    })
}) 