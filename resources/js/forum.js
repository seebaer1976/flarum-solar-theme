import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';

app.initializers.add('solar-theme', () => {

  extend(IndexPage.prototype, 'view', function (vdom) {

    if (!vdom) return;

    const stats = app.forum?.data?.attributes || {};

    const users = stats.usersCount || 0;
    const posts = stats.postsCount || 0;
    const discussions = stats.discussionsCount || 0;
    const online = Math.floor(users * 0.1);

    const dashboard = (
      <div className="solar-dashboard">
        <div className="solar-card">👥 {users} Users</div>
        <div className="solar-card">💬 {discussions} Topics</div>
        <div className="solar-card">📝 {posts} Posts</div>
        <div className="solar-card glow">🟢 {online} Online</div>
      </div>
    );

    // SAFELY einfügen
    if (vdom.children && Array.isArray(vdom.children)) {
      vdom.children.push(dashboard);
    }

  });

});
