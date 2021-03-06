// Generated by typings
// Source: https://raw.githubusercontent.com/glaucoma-australia/glaucoma-risk-calculator-engine/master/glaucoma-risk-calculator-engine.d.ts
declare module 'glaucoma-risk-calculator-engine' {
/// <reference types="mathjs" />

export interface IDictOfStringArray {
    [study: string]: string[];
}

export interface IInput {
    study: 'framingham' | 'olmsted' | 'barbados';
    age: number;
    gender?: string;
    sibling?: boolean;
    parent?: boolean;
    _meta?: string[];
    _extra?: any[];
}

export interface IRiskJson {
    default_expr: {};
    default_family_history: {
        from_study: string;
        sibling_pc: number;
        parents_pc: number;
        ref: Array<{}>;
    };
    studies: {
        olmsted: IOlmsted,
        framingham: IFramingham,
        barbados: IBarbados;
    };
}

interface IStudy {
    n: number;
    ethnicities: string[];
    expr: Array<{
        key: string,
        take: number,
        type?: string,
        filter?: string[],
        extract?: string
    }>;
    ref: Array<{}>;
}

export interface IOlmsted extends IStudy {
    age: { [idx: string]: number };
    agenda?: undefined;
}

export interface IFramingham extends IStudy {
    age: { [idx: string]: number };
    agenda: Array<{
        gender: 'male' | 'female',
        age: string,
        n: number,
        oags: number,
        meth2_prevalence: number;
        meth3_prevalence: number;
    }>;
}

export interface IBarbados extends IStudy {
    normal_tension: boolean;
    agenda: Array<{
        gender: 'male' | 'female',
        age: string,
        'n over n at Risk': string,
        'Incidence, % (95% CI)': string,
        max_incidence: number
    }>;
}

import MathType = mathjs.MathType;
export interface IObjectCtor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
    values<T>(o: {
        [s: string]: T;
    }): T[];
}
export const ethnicities_pretty: (ethnicities: any) => any;
export const s_col_to_s: (s: string) => string;
export const in_range: (range: string, num: number) => boolean;
export const lowest_range: (ranges: string[]) => number;
export const uniq: (a: any[]) => any[];
export const uniq2: (arr: Array<{}>) => Array<{}>;
export const preprocess_studies: (risk_json: any) => any;
export const sort_ranges: (ranges: string[]) => string[];
export const risk_from_study: (risk_json: any, input: any) => number;
export const familial_risks_from_study: (risk_json: any, input: any, warn?: boolean) => number[];
export const combined_risk: (familial_risks_from_study_l: number[], risk_from_studies: number) => MathType;
export const risks_from_study: (risk_json: any, input: any) => number[];
export const place_in_array: (entry: any, a: any[]) => number;
export const pos_in_range: (ranges: string[], num: number) => number;
export const list_ethnicities: (risk_json: any) => any;
}
