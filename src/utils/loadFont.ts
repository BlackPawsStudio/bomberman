interface FFS extends FontFaceSet {
  add?: (loaded: FontFace) => void;
}

export const loadFont = (name: string, url: string) => {
  const newFont = new FontFace(name, `url(${url})`);
  newFont
    .load()
    .then((loaded) => {
      const DF: FFS = document.fonts;
      if (DF.add !== undefined) {
        DF.add(loaded);
      }
    })
    .catch((error) => {
      return error;
    });
};
