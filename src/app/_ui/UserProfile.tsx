import Avatar from '@/components/Avatar';
import Card from '@/components/Card';
import Tab from './Tab';
import Text from '@/components/Text';
import { navigation } from '@/constant/navigation';

export default function UserProfile() {
	return (
		<Card className="flex w-full flex-col justify-start gap-[52px] pb-7 pt-8 xl:justify-center xl:pb-5 xl:pl-10 xl:pt-10">
			<div className="flex w-full flex-col gap-6 ">
				<div className="flex flex-col items-center gap-4 xl:flex-row xl:gap-12">
					<Avatar />
					<div className="flex flex-col gap-8 text-center xl:text-left">
						<Text variant="custom" className="text-2xl xl:text-5xl">
							Иванов
							<br /> Иван Иванович
						</Text>
						<div className="flex flex-col gap-4">
							<Text>Junior UI/UX designer</Text>
							<Text>
								Россия, Красноярск{' '}
								<Text as="span" className="text-tertiary-txt">
									• 14:03
								</Text>
							</Text>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-end"></div>
			</div>
			<nav className="flex overflow-x-auto pl-4 xl:pl-0">
				{navigation.map(({ title, href, id }) => (
					<Tab key={id} href={href}>
						{title}
					</Tab>
				))}
			</nav>
		</Card>
	);
}
