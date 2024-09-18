import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

const components = {
  h1: (props) => (
    <h1 {...props} className='text-2xl'>
      {props.children}
    </h1>
  ),
  h2: (props) => (
    <h2 {...props} className='text-xl'>
      {props.children}
    </h2>
  ),
  a: (props) => (
    <a
      {...props}
      className='text-link-color hover:underline'
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {props.children}
    </a>
  ),
  p: (props) => (
    <p {...props} className='mb-[1em] mt-[1em] '>
      {props.children}
    </p>
  ),
  Image: (props) => <Image {...props} />,
};

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
