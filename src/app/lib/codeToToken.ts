import { codeToTokens as shikiCodeToTokens, type ThemeRegistrationAny } from "shiki";

export async function codeToTokens(code: string) {
  return shikiCodeToTokens(code, {
    lang: "tsx",
    theme: myTheme,
  })
}

export async function toTokens(code: string) {
  return shikiCodeToTokens(code, {
    lang: "tsx",
    theme: "vesper",
  })
}

const myTheme: ThemeRegistrationAny = {
  name: 'my-theme',
  settings: [
    {
      scope: ['keyword', 'storage.type'],
      settings: {
        foreground: '#FD8DA3'
      }
    },
    {
      scope: ['string', 'entity.name.tag'],
      settings: {
        foreground: '#77D5A3'
      }
    },
    {
      scope: ['entity.name.function', 'entity.name'],
      settings: {
        foreground: '#BD9CFE'
      }
    },
    {
      scope: ['variable'],
      settings: {
        foreground: '#92A9FF'
      }
    },
  ]
}



