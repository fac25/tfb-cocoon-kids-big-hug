import Layout from '../components/layout/Layout'
import UserGroupBtn from '../components/UserGroupBtn'

export default function Landing() {
    return (
        <Layout isLanding={true} pageTitle="Landing">
            <header>
                <h1>
                    Cocoon Kids Big Hug is a therapeutic service for children
                </h1>
            </header>
            <div>
                <div>
                    <UserGroupBtn userGroup="under13" text="I’m a child under 13" />
                </div>
                <div>
                    <UserGroupBtn userGroup="over13" text="I’m a child over 13" />
                </div>
                <div>
                    <UserGroupBtn
                        userGroup="teacher"
                        text="I’m a teacher/professional"
                    />
                </div>
                <div>
                    <UserGroupBtn
                        userGroup="parent"
                        text="I’m a parent/carer"
                    />
                </div>
            </div>
        </Layout>
    )
}
