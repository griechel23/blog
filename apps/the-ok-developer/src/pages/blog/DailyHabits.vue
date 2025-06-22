<template>
  <BlogPost
    title="Work Habits"
    subtitle="Author: Garren Riechel"
  >
    <template #content>
      And now for something completely different. No technical topics today, but instead a list of rules that I have
      come up with and try to follow in order to keep my career and sanity on track. These are highly opinionated, and
      do not apply to everybody. Your mileage may vary.
      <br/><br/>
      <div class="subtitle">
        Rule #1: 1 PR a day
      </div>

      This has two important components: Internal momentum and external optics.
      <br/><br/>
      Internal Momentum:
      As you become more and more senior in your career, your areas of responsibility will shift - from well-scoped
      single tickets that can be crushed in a day, to more nebulous and large-scale problems spanning months or years.
      Regardless of how large and vague your scope of responsibility is, it is your job to break it up into
      those nicely scoped tasks. Nobody likes it, most of all you, if weeks spent on a complex implementation
      turns out to be directionally off or not needed. It’s a huge confidence and motivation killer.

      <br/><br/>
      Instead, you should be able to encapsulate a single chunk of work into a manageable daily task. If you cannot,
      spend more time thinking through your approach. Opening a single PR a day makes you feel the progress towards the
      goal, which is more and more important as your responsibility scope increases.

      <br/><br/>
      External Optics:
      You may have the most friendly boss, work at the best company, and bask in unlimited PTO. But come performance
      review time, someone will be sitting down and thinking hard about how much work you have gotten done.
      This comes in many flavors: Impact assessment, performance review, biannual evaluation - whatever you want to
      call it, at the end of the day your output will be compared to those around you. This will result in raises,
      promotions, future trajectory at this company, or potentially a path to performance improvement plans (PIPs)
      and/or termination.
      <br/><br/>
      It’s important to put your best foot forward. One of the easiest ways to do that is establish yourself as a
      developer who is delivering consistent value at a reliable pace. While this is not the only thing that matters,
      nor the most important, it will absolutely help. If you don’t have the benefit of shipping The Huge Project one
      month before annual reviews, it will be invaluable if your peers and managers consider you an output machine.
      <br/><br/>

      Aside:
      I’m painting with a broad brush here. Each PR should make incremental, but unquestionable progress towards a
      goal. This means you shouldn’t spend a month making environment variable name changes or updating the
      formatting in a README. Instead, refactor a component, improve some test coverage, stub out a nonfunctional page which
      gives the designer something to consider, etc. Use your judgement and read the room.

      <br/><br/>
      <div class="subtitle">
        Rule #2: Set Daily Goals (and keep yourself honest)
      </div>

      What should your daily PR cover? What resolutions do you want to get out of each meeting? When are you working
      out? Do I need to preheat the oven for dinner?
      <br/><br/>
      I’m someone who thrives in rigid structure with a tight timeline (and spirals out of control without it).
      <br/><br/>
      Personally, I use a tool called Sunsama, which is essentially a nice looking Kanban board. If you prefer to organize your
      life in sprints, so be it. Regardless of the mechanism, I find a huge amount of value in jotting down what I
      expect to get done on a given day, every day of the week.
      <br/><br/>
      I use this for work as well as normal life - that’s how impactful I’ve found it. The benefits are twofold:
      <br/><br/>
      I forget less. Some days I am a scatterbrained hot mess and having something to reference that says “yesterday’s
      Garren said you need to schedule a dentist appointment and also upgrade the DB instance” helps keep me on top of
      things.
      <br/><br/>
      It preserves work/life balance. I don’t always finish the daily goals I set for myself at work, but if I do, I
      call it a day. Hard stop. I had a different outlook in my 20s, but I no longer wish to kill myself working overtime
      for no extra pay. I prefer to cherish my time to go for a bike ride, make a fancy dinner, take my dogs for a long
      walk, or spend time with my family.
      <br/><br/>
      <div class="subtitle">
        Rule #3: Keep a Work Journal
      </div>
      “What would you say… you do here?” - Office Space, 1999
      <br/><br/>
      Performance reviews are stressful and do not always accurately reflect all your contributions to the
      organization. I personally had the pleasure of being asked to list what I did in the last 12 months during a
      performance review, slowly coming to the horrifying realization that my manager had absolutely no idea what I had
      been working on. And at that point, it's too late!
      <br/><br/>
      In an ideal world, everyone’s manager will track each report’s contributions over the course of a year and think
      carefully about the average and overall impact and trajectory, which weighs fairly into a performance review and
      subsequent financial reward.
      <br/><br/>
      However, that’s not their job. Well, it kind of is, but that’s beside the point. The point being - it’s YOUR
      job to advocate for yourself. Nobody else will. Due to recency bias, most performance reviews are more of a
      reflection on the past 3 months of work. It’s very difficult for anyone, including yourself, to remember the
      Big Feature you shipped 11 months ago.
      <br/><br/>
      So, keep a journal. This shouldn’t take a ton of time, but it can be difficult to get in the habit.
      I carve out 15 minutes every Friday at 4pm to open an ever-growing Google Doc in which I jot down how
      I’m feeling about my job, things that were good, things that were bad, and most importantly, evidence of
      work that I was responsible for. These are usually links to Jira tickets or merged Pull Requests, but can
      also be other artifacts including Figma diagrams, architecture proposals, RFCs, or meeting notes.
      <br/><br/>
      When the time comes to write self-reflections/reviews, having easy-to-find links to hard data is invaluable.
      <br/><br/>
      <div class="subtitle">
        Rule #4: Decline meetings
      </div>
        If you aren’t going to get anything out of it, don’t go. This usually applies to large group meetings
        (org sync, Team X office hours, x-functional team standups, etc), as well as 1:1s. It’s your time and you
        should feel ownership over it.
        <br/><br/>
        This doesn’t mean you can just ditch every single meeting invite. Getting something out of a meeting
        can take many forms - an All Hands may involve Leadership taking responsibility for other people’s hard work,
        but it also might give you some insight into what actions and outcomes are rewarded at the company. You might
        not have any questions to ask in a 1:1, but getting facetime with your manager or skip level is always a good
        idea to keep their impression of you fresh.
        <br/><br/>
        But if you are an IC and find yourself in standup saying “I probably won’t get much done today - too many
        meetings”, take a careful look at your calendar and consider hitting that “decline” button.
    </template>
  </BlogPost>
</template>

<script setup lang="ts">
import { BlogPost } from "@repo/components"
</script>