import Schools from '../../components/Schools'
import Layout from '../../components/layout/Layout'
const SchoolPage = () => {
    return (
        <Layout isLanding={true} showEmergency={false}>
            <Schools />
        </Layout>
    )
}

export default SchoolPage
