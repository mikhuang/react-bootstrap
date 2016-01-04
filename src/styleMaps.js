
let constant = obj => {
  return Object.assign(
    Object.create({
      values() {
        return Object.keys(this).map(k => this[k]);
      }
    }), obj);
};

const styleMaps = {

  SIZES: {
    'xlarge': 'xl',
    'large': 'lg',
    'medium': 'md',
    'small': 'sm',
    'xsmall': 'xs',
    'xl': 'xl',
    'lg': 'lg',
    'md': 'md',
    'sm': 'sm',
    'xs': 'xs'
  },
  GRID_COLUMNS: 12
};

export const Sizes = constant({
  XLARGE: 'xlarge',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  XSMALL: 'xsmall'
});

export const State = constant({
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info'
});

export const DEFAULT = 'default';
export const PRIMARY = 'primary';
export const LINK = 'link';
export const INVERSE = 'inverse';

export default styleMaps;
