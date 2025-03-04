export const isImageFile = (str: string): boolean => {
  const imageRegex = /\.(jpg|jpeg|png|gif|bmp|webp)$/i;
  return imageRegex.test(str);
};

export const isVideoFile = (str: string): boolean => {
  const videoRegex = /\.(mp4|mkv|webm|avi|mov|flv)$/i;
  return videoRegex.test(str);
};

export const isYouTubeOrVimeo = (str: string): boolean => {
  const urlRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/.*|youtu\.be\/.*|vimeo\.com\/.*)$/i;
  return urlRegex.test(str);
};
