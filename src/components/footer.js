import React from "react"

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://jamiesims.com">Jamie</a> and{" "}
      <a
        href="https://github.com/renyuanz/leonids"
        target="_blank"
        rel="noreferrer"
      >
        JS theme
      </a>
      .
    </footer>
  )
}

export default Footer
