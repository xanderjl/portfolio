import getShareImage from '@jlengstorf/get-share-image'

const useOgImage = (title: string) => {
  // @ts-ignore
  return getShareImage({
    title,
    cloudName: `alexlow-dev`,
    imagePublicID: `share-card.jpg`,
    titleFont: `Poppins`,
    textColor: `000000`,
    titleFontSize: 65,
    titleLeftOffset: 180,
    titleBottomOffset: 300
  })
}
export default useOgImage
