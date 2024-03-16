import Feed from './Feed'

const Home = ({ posts }) => {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ margintTop: '2rem' }}>No posts to disply</p>
      )}
    </main>
  )
}

export default Home
