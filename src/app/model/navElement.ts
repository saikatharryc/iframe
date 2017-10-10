export interface INavElement {
  id: string;
  name: string;
  url?: string;
}

export function getMockNavElements(): INavElement[] {
  let mockNavElements: INavElement[] = [];


  let mockNavElementF: INavElement = <INavElement>{};
  mockNavElementF.id = "666";
  mockNavElementF.name = 'Service A';
  mockNavElementF.url = 'https://angular.io/tutorial';
  mockNavElements.push(mockNavElementF);

  let mockNavElementG: INavElement = <INavElement>{};
  mockNavElementG.id = "777";
  mockNavElementG.name = 'Service B';
  mockNavElementG.url = 'http://jasonwatmore.com/post/2017/02/22/mean-with-angular-2-user-registration-and-login-example-tutorial';
 
  mockNavElements.push(mockNavElementG);


  return mockNavElements;
}

export function getNavElementById(id: string):INavElement {
  return getMockNavElements().find(element => element.id === id);
}