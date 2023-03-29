import RenderCampsite from '../features/campsites/RenderCampsite';

const CampsiteInfoScreen = ( route ) => {
    const { campsite } = route.params;
    return <RenderCampsite campsite={props.campsite} />;
};

export default CampsiteInfoScreen;