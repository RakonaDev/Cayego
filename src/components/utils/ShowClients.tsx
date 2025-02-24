
export default function ShowClients({ marcas }: { marcas: string[] }) {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
                      let ul = $refs.logos;
                      ul.insertAdjacentHTML('afterend', ul.outerHTML);
                      ul.nextSibling.setAttribute('aria-hidden', 'true');
                  })"
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {
          marcas.map((cliente, index) => {
            return (
              <li key={index}>
                <img src={cliente} alt="cliente" width={200} height={200} />
              </li>
            );
          })
        }
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {
          marcas.map((cliente, index) => {
            return (
              <li key={index}>
                <img src={cliente} alt="cliente" width={200} height={200} />
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}
