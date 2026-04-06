import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';

app.initializers.add('solar-theme', () => {

  extend(IndexPage.prototype, 'hero', function (hero) {

    const stats = app.forum.data.attributes;

    const users = stats.usersCount;
    const posts = stats.postsCount;
    const discussions = stats.discussionsCount;

    // Fake "online" (kann später API bekommen)
    const online = Math.floor(users * 0.1);

    hero.children.push(
      <div className="solar-dashboard">
        <div className="card">👥 {users} Users</div>
        <div className="card">💬 {discussions} Topics</div>
        <div className="card">📝 {posts} Posts</div>
        <div className="card glow">🟢 {online} Online</div>
      </div>
    );

  });

});
