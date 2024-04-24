export interface IRoute {
  path: string;
  name: string;
  element: (props?: any) => React.JSX.Element;
}
