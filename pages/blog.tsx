import type { GetStaticPropsContext } from 'next'
import { getConfig } from '@framework/api'
import getAllPages from '@framework/api/operations/get-all-pages'
import { Layout } from '@components/common'
import { Container } from '@components/ui'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })
  const { pages } = await getAllPages({ config, preview })
  return {
    props: { pages },
  }
}

export default function Blog() {
  return (
    <div className="pb-20">
      <div className="text-center pt-40 pb-56 bg-violet">
        <Container>
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
            Bem-vindos a Mussumdis Store, aonde vendemos tudo pela metade do dobro
          </h2>
          <p className="mt-3 max-w-md mx-auto text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            The Yeezy BOOST 350 V2 lineup continues to grow. We recently had the
            ‘Carbon’ iteration, and now release details have been locked in for
            this ‘Natural’ joint. Revealed by Yeezy Mafia earlier this year, the
            shoe was originally called ‘Abez’, which translated to ‘Tin’ in
            Hebrew. It’s now undergone a name change, and will be referred to as
            ‘Natura`
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="flex">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://vercel.com/api/www/avatar/61182a9f6bda512b4d9263c9c8a60aabe0402f4c?s=204"
                  alt="Avatar"
                />
              </div>
              <div className="ml-4">
                <div className="leading-6 font-medium text-white">
                  José Rodriguez
                </div>
                <div className="leading-6 font-medium text-gray-200">
                  CEO, Acme
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="-mt-96 mx-auto">
          <img src="/jacket.png" alt="Jacket" />
        </div>
        {/** Replace by HTML Content */}
        <div className="text-lg leading-7 font-medium py-6 text-justify max-w-6xl mx-auto">
          <p className="py-6">
          Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Admodum accumsan disputationi eu sit. 
          Vide electram sadipscing et per. Detraxit consequat et quo num tendi nada. Diuretics paradis num copo é motivis de denguis. 
          Paisis, filhis, espiritis santis. Atirei o pau no gatis, per gatis num morreus. A ordem dos tratores não altera o pão duris. Per aumento de cachacis, eu reclamis. 
          </p>
          <p className="py-6">
          Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim.
          Detraxit consequat et quo num tendi nada. Quem manda na minha terra sou euzis! Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
          Delegadis gente finis, bibendum egestas augue arcu ut est. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. 
          In elementis mé pra quem é amistosis quis leo. A ordem dos tratores não altera o pão duris. 
          </p>
        </div>
      </Container>
    </div>
  )
}

Blog.Layout = Layout
