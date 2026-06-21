import {
	Flex,
	Heading,
	Text,
	Grid,
	Card,
	Box,
	Container,
	Badge,
} from "@radix-ui/themes";
import { useState } from "react";

const Index = () => {
	const experience = [
		{
			description: "",
		},
		{
			description:
				"Designed and developed an automated aerator control system using a Fuzzy Inference System (FIS) to maintain optimal dissolved oxygen levels for Vannamei shrimp cultivation. Integrated industrial-grade hardware, including Variable Frequency Drive, Dissolved Oxygen sensor, and a Single Board Computer. Developed the core control algorithm in Python, implementing data acquisition and failover mechanism to ensure operation stability and energy efficiency.",
		},
		{
			description:
				"Instructed 150+ students on Digital Systems fundamentals, including logic gates, binary arithmetic, and circuit design. Developed and implemented real-world case studies into lab assignments to enhance students' analytical skills. Strengthened grading integrity by implementing standardized assessment rubrics and anti-plagiarism measures.",
		},
		{
			description:
				"Managed software engineering related Teaching Assistant recruitment and selection process. Standardized and optimized Laboratory Standard Operating Procedures (SOP).",
		},
	];

	const handleClick = (index: number) => {
		setXpIndex(index);
	};

	const [xpIndex, setXpIndex] = useState<number>(0);

	return (
		<Container size="3" p="4">
			<Flex direction="column" gap="4" align="center" mt="10">
				{/* profile */}
				<Card size="3" style={{ width: "100%", maxWidth: 600 }}>
					<Flex direction="row" gap="6" align="center">
						<img
							className="w-auto h-60 rounded-4xl"
							src="src/assets/picture.png"
							alt=""
						/>
						<Box>
							<Heading size="6" mb="1">
								Kenzie Tama
							</Heading>
							<Text as="p" color="gray" size="2">
								I'm a Computer Engineering Graduate specialized
								in software development, IoT automation, and
								scripting automation. Currently, I'm attending
								Java Development Training (JDT) at Indivara
								Group to enhance my skills and knowledge in Java
								Spring Boot backend programming.
							</Text>
							<Flex gap="2" mt="3" wrap="wrap">
								<Badge color="cyan" variant="soft">
									North Jakarta
								</Badge>
								<Badge color="cyan" variant="soft">
									+62895410044322
								</Badge>
								<Badge color="cyan" variant="soft" asChild>
									<a
										href="https://linkedin.com/in/kenzie-tama"
										target="_blank"
										rel="noopener noreferrer"
									>
										linkedin.com/in/kenzie-tama
									</a>
								</Badge>
								<Badge color="cyan" variant="soft" asChild>
									<a href="mailto:kenzietama@protonmail.com">
										kenzietama@protonmail.com
									</a>
								</Badge>
							</Flex>
						</Box>
					</Flex>
				</Card>

				{/* experience */}
				<Box style={{ width: "100%" }}>
					<Heading size="5" mb="4">
						Experience
					</Heading>

					<Grid columns={{ initial: "1", sm: "3" }} gap="4">
						{/* Job Card 1 */}
						<Card
							onClick={() => handleClick(1)}
							style={{
								backgroundColor:
									xpIndex === 1 ? "var(--cyan-3)" : undefined,
							}}
							className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-var(--accent-9) cursor-pointer"
						>
							<Flex direction="column" gap="2">
								<img
									className="w-full h-40 rounded-md object-cover"
									src="src/assets/tambak.jpeg"
									alt="Control System Engineer"
								/>
								<Heading as="h3" size="3" mt="2">
									Control System Engineer
								</Heading>
							</Flex>
						</Card>

						{/* Job Card 2 */}
						<Card
							onClick={() => handleClick(2)}
							style={{
								backgroundColor:
									xpIndex === 2 ? "var(--cyan-3)" : undefined,
							}}
							className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-var(--accent-9) cursor-pointer"
						>
							<Flex direction="column" gap="2">
								<img
									className="w-full h-40 rounded-md object-cover"
									src="src/assets/ngasprak.jpeg"
									alt="Lab Assistant"
								/>
								<Heading as="h3" size="3" mt="2">
									Lab Assistant
								</Heading>
							</Flex>
						</Card>

						{/* Job Card 3 */}
						<Card
							onClick={() => handleClick(3)}
							style={{
								backgroundColor:
									xpIndex === 3 ? "var(--cyan-3)" : undefined,
							}}
							className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-var(--accent-9) cursor-pointer"
						>
							<Flex direction="column" gap="2">
								<img
									className="w-full h-40 rounded-md object-cover"
									src="src/assets/cerc.jpeg"
									alt="CERC"
								/>
								<Heading as="h3" size="3" mt="2">
									Computer Engineering Research Club (CERC)
								</Heading>
							</Flex>
						</Card>
					</Grid>
				</Box>

				{/* xp description */}
				{xpIndex === 0 ? (
					<div></div>
				) : (
					<>
						<Card
							className="h-40"
							style={{ backgroundColor: "var(--cyan-3)" }}
						>
							<Text as="p">
								{experience[xpIndex]?.description}
							</Text>
						</Card>
					</>
				)}
			</Flex>
		</Container>
	);
};
export default Index;
