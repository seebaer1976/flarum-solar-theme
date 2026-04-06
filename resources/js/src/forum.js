import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';

app.initializers.add('solar-theme', () => {

  extend(IndexPage.prototype, 'hero', function (hero) {

    const stats = app.forum.data.attributes || {};

    const users = stats.usersCount || 0;
    const posts = stats.postsCount || 0;
    const discussions = stats.discussionsCount || 0;

    // "Fake Online" smarter (min 1)
    const online = Math.max(1, Math.floor(users * 0.1));

    hero.children.push(
      <div className="solar-dashboard">
        <div className="solar-card">👥 {users} Users</div>
        <div className="solar-card">💬 {discussions} Topics</div>
        <div className="solar-card">📝 {posts} Posts</div>
        <div className="solar-card glow">🟢 {online} Online</div>
      </div>
    );

  });

});
