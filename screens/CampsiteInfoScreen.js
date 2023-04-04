import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Modal, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Rating, Input } from 'react-native-elements';
import RenderCampsite from '../features/campsites/RenderCampsite';
import { toggleFavorite } from '../features/favorites/favoritesSlice';

const CampsiteInfoScreen = ({ route }) => {
    const { campsite } = route.params;
    const [showModal, setShowModal] = useState(false);
    const [rating, setRating] = useState(5);
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
};

const comments = useSelector((state) => state.comments);
const favorites = useSelector((state) => state.favorites);
const dispatch = useDispatch();

const handleSubmit = () => {
    const newComment = {
        author,
        rating,
        text,
        campsiteid: campsite.id,
    };

    console.log("New Comment>>>", newComment);
    dispatch(postComment(newComment));
    setShowModal(!showModal);
};

const resetForm = () => {
    setAuthor("");
    setRating(5);
    setText("");


};

const renderCommentItem = ({ item }) => {
    return (
        <View style={styles.commentItem}>
            <Text style={{ fontSize: 14 }}>{item.text}</Text>
            <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
            <Text style={{ fontSize: 12 }}>
                {`-- ${item.author}, ${item.date}`}
            </Text>
        </View>
    );
};

return (
    <FlatList
        data={comments.commentsArray.filter(
            (comment) => comment.campsiteId === campsite.id
        )}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
            marginHorizontal: 20,
            paddingVertical: 20
        }}
        ListHeaderComponent={
            <>
                <RenderCampsite
                    campsite={campsite}
                    isFavorite={favorites.includes(campsite.id)}
                    markFavorite={() => dispatch(toggleFavorite(campsite.id))}
                />
                <Text style={styles.commentsTitle}>Comments</Text>
            </>
        }
    />
);

<Modal
    animationType="slide"
    transparent={false}
    visible={showModal}
    onRequestClose={() => setShowModal(!showModal)}
>
    <View style={styles.Modal}>
        <Rating
            showRating
            startingValue={rating}
            imagizeSize={40}
            onfinishRating={(rating) => setRating(rating)}
            style={{ paddingVertical: 10 }}
        />
        <Input
            placeholder="Author"
            leftIcon={{ type: "font-awesome", name: "user-o" }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            onChangeText={(author) => setAuthor(author)}
            value={text}
        />
        <Input
            placeholder="Comment"
            leftIcon={{ type: "font-awesome", name: "comment-o" }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            onChangeText={(text) => setText(text)}
            value={text}
        />
        <View style={{ margin: 10 }}>
            <Button
                OnPress={0 => {
                handleSubmit();
            resetForm();
            color="#5637DD"
            title="Submit"
                    };

            <View style={{ margin: 10 }}>
                <Button
                    OnPress={0=> {
                    setShowModal(!showModal);
                resetForm();
                    }}
                color="#808080"
                title="Cancel"
            />
            </View>
        </View>
</View>
</Modal>
    




const styles = StyleSheet.create({
    commentsTitle: {
        textAlign: "center",
        backgroundColor: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        color: "#43484D",
        padding: 10,
        paddingTop: 30,
    },
    commentItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#fff",

    },
    modal: {
        justifyContent: "center",
        margin: 20,
    },

});




export default CampsiteInfoScreen;
