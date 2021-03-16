import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pretzelswapfinance.com/#/swap?outputCurrency=0x9066e87Bac891409D690cfEfA41379b34af06391', // to be updated before deployment
      },
      {
        label: 'Liquidity',
        href:
          'https://exchange.pretzelswapfinance.com/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x9066e87Bac891409D690cfEfA41379b34af06391', // to be updated before deployment
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Wiesn',
    icon: 'PoolIcon',
    href: '/wiesn',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x9066e87Bac891409D690cfEfA41379b34af06391', // to be updated before deployment
      },
      // {
      //  label: 'CoinGecko',
      //  href: 'https://www.coingecko.com/en/coins/pretzelswap-finance',
      //  },
      //  {
      //  label: 'CoinMarketCap',
      //  href: 'https://coinmarketcap.com/currencies/pretzelswap-finance/',
      //  },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pretzelswap/',
      },
      {
        label: 'Docs',
        href: 'https://pretzelswap-finance.gitbook.io/pretzelswap-finance/',
      },
      {
        label: 'Roadmap',
        href: 'https://pretzelswap-finance.gitbook.io/pretzelswap-finance/roadmap',
      },
      {
        label: 'Team',
        href: 'https://pretzelswap-finance.gitbook.io/pretzelswap-finance/team',
      },
    ],
  },
]

export default config
