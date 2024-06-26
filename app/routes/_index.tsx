import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" }
  ]
}

export default function Index() {
  return (
    <div>
      <p>Just another work in progress! :)</p>
    </div>
  )
}
