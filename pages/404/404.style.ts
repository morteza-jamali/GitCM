export default function styles(): IStyleFunction {
  return (theme: any) => ({
    root: {
      backgroundColor: theme.palette.background.dark,
      height: '100%',
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3)
    },
    image: {
      marginTop: 50,
      display: 'inline-block',
      maxWidth: '100%',
      width: 560
    }
  });
}
