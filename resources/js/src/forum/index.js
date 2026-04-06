import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';

app.initializers.add('solar-theme', () => {

  extend(IndexPage.prototype, 'hero', function (hero) {

    const stats = app.forum.data.attributes;

    hero.children.push(
      <div className="solar-dashboard">
        <div className="card">👥 {stats.usersCount} Users</div>
        <div className="card">💬 {stats.discussionsCount} Topics</div>
        <div className="card">📝 {stats.postsCount} Posts</div>
      </div>
    );

  });

});
