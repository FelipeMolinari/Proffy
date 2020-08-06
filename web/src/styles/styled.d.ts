import 'styled-components'
declare module 'styled-components'{
  export interface DefaultTheme{
    title: string,
    colors:{
      background:string,
      title: string,
      subTitle: string,
      subtext: string,
      button: string,
      buttonHover: string,
      box: string,
      input: string,
      border: string,
      paragraphText: string,
      primary:string,
      lighter: string,
    },
    landiscape: string

  }
}