/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type webLoginPage = typeof import('./page_objects/web_page.js');
type mobilePage = typeof import('./page_objects/mobile_page.js');
type Myweb = import('./helper/myweb_helper.js');
type Mymobile = import('./helper/mymobile_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, webLoginPage: webLoginPage, mobilePage: mobilePage }
  interface Methods extends Puppeteer, Appium, Myweb, Mymobile {}
  interface I extends ReturnType<steps_file>, WithTranslation<Myweb>, WithTranslation<Mymobile> {}
  namespace Translation {
    interface Actions {}
  }
}
