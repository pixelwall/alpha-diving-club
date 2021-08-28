import { GetLayoutProps, PageProps } from '@/components/page-layout'
import Location from './location'
import Form from './form'
import styles from './styles/form.module.css'

export type IndexProps = PageProps

const getLayoutProps: GetLayoutProps = () => ({
	title: 'Contact',
	padded: false,
})

const Index = (data: IndexProps) => (
	<>
		<Location />
		{/* <div className={`${styles['round']}`}> */}
			<Form />
		{/* </div> */}
	</>
)

Index.getLayoutProps = getLayoutProps

export default Index
