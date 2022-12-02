import { PDFDocument, rgb } from "pdf-lib"

export async function createPdf(lineLength: number) {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([350, 400])

  page.drawLine({
    start: {
      x: 50,
      y: 350
    },
    end: {
      x: 50 + lineLength,
      y: 350
    },
    color: rgb(1, 0, 0)
  })

  page.moveTo(50, 300)
  page.drawText("Look at this red line!")

  return await pdfDoc.saveAsBase64({ dataUri: true })
}
