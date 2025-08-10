export const EASE = [0.22, 1, 0.36, 1];

export const variantsMap = {
  fadeUp:  { hidden: { opacity: 0, y: 24 },  visible: { opacity: 1, y: 0 } },
  fadeIn:  { hidden: { opacity: 0 },         visible: { opacity: 1 } },
  slideL:  { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  slideR:  { hidden: { opacity: 0, x: 32 },  visible: { opacity: 1, x: 0 } },
  scaleIn: { hidden: { opacity: 0, scale: .9 }, visible: { opacity: 1, scale: 1 } },
};
