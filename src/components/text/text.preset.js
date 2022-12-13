import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

const BASE = {
  fontFamily: typography.primary,
  fontSize: spacing[4],
  color: colors.darkBlue,
};

const BASE_BOLD = {
  ...BASE,
  fontFamily: typography.primaryBold,
};

const BOLD = {
  fontFamily: typography.bold,
  color: colors.darkBlue,
};

const REGULAR = {
  fontFamily: typography.primary,
  color: colors.grey,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...REGULAR,
    fontSize: 16,
  },
  small: {
    ...REGULAR,
    fontSize: 12,
  },
};
