const Likes = ({ likes }) => {
	return (
		<>
			{likes === 0 || likes === undefined ? 'No' : likes}{' '}
			{likes === 1 ? 'like!' : likes === 0 ? 'likes yet.' : 'likes!'}
		</>
	);
};

export default Likes;
