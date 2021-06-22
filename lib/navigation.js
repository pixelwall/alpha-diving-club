export default function Navigation(data) {
  return [
    {
      titulo: 'Home',
      href: '/',
    },
    {
      titulo: 'Menu',
      childrens: [
        {
          titulo: 'Link 1',
          href: '/link1',
        },
        {
          titulo: 'Link 2',
          href: '/link2',
        },
        {
          titulo: 'Link 3',
          href: '/link3',
        },
      ]
    },
  ]
}
