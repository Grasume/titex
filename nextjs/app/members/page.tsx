import { auth } from "../../auth"
import  React  from 'react'
import { redirect } from 'next/navigation';


export default async function CorporationDashboard() {

    const session = await auth()

    if( !session ) { return redirect('/api/auth/signin?callbackUrl=/member') }

    return ( <h1 className="text-lg text-neutral-300"> Allowed </h1> )



}
