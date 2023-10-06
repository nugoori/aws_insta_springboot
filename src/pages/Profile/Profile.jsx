import React from 'react';
import RootContainer from '../../components/Containers/RootContainer/RootContainer';
import ProfileLayout from '../../components/Layouts/ProfileLayout/ProfileLayout';
import ProfileBody from '../../components/Profile/ProfileBody/ProfileBody';
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';

function Profile(props) {
    return (
        <RootContainer>
            <ProfileLayout >
                <ProfileHeader />
                <ProfileBody />
            </ProfileLayout>
        </RootContainer>
    );
}

export default Profile;