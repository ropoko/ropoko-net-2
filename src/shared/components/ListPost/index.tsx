import React from 'react';
import Link from 'next/link';
import { ListPostStyle } from './ListPostStyle';
import { Post } from '../../../shared/types/post.type';

const ListPost = ({ post }: { post: Post }) => {
	return (
		<ListPostStyle>
			<header>
				<section>
					<Link href={`/posts/${post.slug}`}>
						<h1 title={post.title}>{post.title}</h1>
					</Link>
				</section>
				<div className="dates">
					<em>Posted: {post.date}</em>
					{post.updated && <em className="updated">Updated: {post.updated}</em>}
				</div>
			</header>

			<footer>
				<div className="footer-container">
					<section className="tags">
						<div className="aux-tags">
							{post.tags.map((tag: string) => (
								<a title={tag} key={tag} href={`/tags/${tag}`}>
									{tag}
								</a>
							))}
						</div>
					</section>
				</div>
			</footer>
		</ListPostStyle>
	);
};

export default ListPost;
