import 'styled-components'
declare module 'styled-components'{
  export interface DefaultTheme{
    title: string,
    colors:{
      background:string,
      title: string,
      subtext: string,
      button: string,
      buttonHover: string
    },
    landiscape: string

  }
}