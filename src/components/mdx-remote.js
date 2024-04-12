import { MDXRemote } from 'next-mdx-remote/rsc'

const components = {
  h1: (props) => (
    <h1 {...props} className="text-2xl">
      {props.children}
    </h1>
  ),
  a: (props) => (
    <a {...props} className="text-link-color hover:underline">
      {props.children}
    </a>
  ),
  p: (props) => (
    <p {...props} className="mb-[1em] mt-[1em]">
      {props.children}
    </p>
  ),
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}