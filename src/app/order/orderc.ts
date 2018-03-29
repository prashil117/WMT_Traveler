export class Order{
    public  constructor(public order_id:string,public fk_user_id:string,public source:string,public destination:string,public Booking_date:string,public checking_date:string,public checkout_date:string,public amount:number,public fk_car_id:number,public fk_car_name:string,public fk_driver_id:number,public fk_traveller_id:number,public booking_status:string){

    }
}