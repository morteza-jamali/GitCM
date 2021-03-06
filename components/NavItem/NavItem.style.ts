export default function styles(): IStyleFunction {
  return (theme: any) => ({
    item: {
      display: 'flex',
      paddingTop: 0,
      paddingBottom: 0
    },
    button: {
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightMedium,
      justifyContent: 'flex-start',
      letterSpacing: 0,
      padding: '10px 8px',
      textTransform: 'none',
      width: '100%'
    },
    icon: {
      marginRight: theme.spacing(1),
      size: '20px'
    },
    title: {
      marginRight: 'auto'
    },
    active: {
      color: theme.palette.primary.main,
      '& $title': {
        fontWeight: theme.typography.fontWeightMedium
      },
      '& $icon': {
        color: theme.palette.primary.main
      }
    }
  });
}
