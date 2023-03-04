export interface Route {
    path: string;
    element: React.ReactNode
}

export interface Routes {
    layout: React.ReactNode
    children: Route[]
}