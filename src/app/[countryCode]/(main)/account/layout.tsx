import { retrieveCustomer } from "@lib/data/customer"
import { getData } from "@lib/util/sanity"
import { Toaster } from "@medusajs/ui"
import AccountLayout from "@modules/account/templates/account-layout"

export default async function AccountPageLayout({
  dashboard,
  login,
}: {
  dashboard?: React.ReactNode
  login?: React.ReactNode
}) {
  const customer = await retrieveCustomer().catch(() => null)
  const query = await getData(`{
    'data':*[_type=='settings'][0]{serviceNote,customerService}
    }`)
 const {data} = query.data  

  return (
    <AccountLayout customer={customer} sanity={data}>
      {customer ? dashboard : login}
      <Toaster />
    </AccountLayout>
  )
}
