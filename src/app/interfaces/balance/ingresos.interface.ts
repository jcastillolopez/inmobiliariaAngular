export interface ingresoInterface {
    id: number,
    fecha_concepto: Date,
    concepto: string,
    ingreso?: number,
    gasto?: number,
    iva_porcentaje:number
    proveedores_id: number,
    inmuebles_id: number,
    fecha_factura?: Date,
    numero_factura?:string,
    usuario_id?: number,
    borrado: boolean,
    create_time?: Date,
    update_time?: Date,
}
export interface ingresoDetalleInterface {
    id: number,
    gasto_ingreso_id: number,
    concepto_detalle?: string,
    base_inponible: number,
    iva: number,
    proveedores_id: number,   
    usuario_id?: number,
    borrado: boolean,
    create_time?: Date,
    update_time?: Date,
}