
export enum Period { Mnd, År }

export enum Currency { NOK, USD, EUR }

export interface Insurance {
    id: number;
    start: Date;
    end: Date; 
    document?: number;
    cost: number;
    currency: Currency,
    period: Period; 
}