export interface ISelector {
    type: string,
    value: PropertyFunction<string> | string,
}

export interface ISelectorFunction {
    type: string,
    value: PropertyFunction<string>,
}

export interface ISelectorString {
    type: string,
    value: string,
}

export interface IGroupSelector {
    [key: string]: ISelector
}

export type PropertyFunction<T> = (T) => T;
