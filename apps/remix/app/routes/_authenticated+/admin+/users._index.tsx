import { Trans } from '@lingui/react/macro';

import { getPricesByPlan } from '@documenso/ee/server-only/stripe/get-prices-by-plan';
import { STRIPE_PLAN_TYPE } from '@documenso/lib/constants/billing';
import { findUsers } from '@documenso/lib/server-only/user/get-all-users';

import { AdminDashboardUsersTable } from '~/components/tables/admin-dashboard-users-table';

import type { Route } from './+types/users._index';

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);

  const page = Number(url.searchParams.get('page')) || 1;
  const perPage = Number(url.searchParams.get('perPage')) || 10;
  const search = url.searchParams.get('search') || '';

  const [{ users, totalPages }, individualPrices] = await Promise.all([
    findUsers({ username: search, email: search, page, perPage }),
    getPricesByPlan([STRIPE_PLAN_TYPE.REGULAR, STRIPE_PLAN_TYPE.COMMUNITY]).catch(() => []),
  ]);

  const individualPriceIds = individualPrices.map((price) => price.id);

  return {
    users,
    totalPages,
    individualPriceIds,
    page,
    perPage,
  };
}

export default function AdminManageUsersPage({ loaderData }: Route.ComponentProps) {
  const { users, totalPages, individualPriceIds, page, perPage } = loaderData;

  return (
    <div>
      <h2 className="text-4xl font-semibold">
        <Trans>Manage users</Trans>
      </h2>

      <AdminDashboardUsersTable
        users={users}
        individualPriceIds={individualPriceIds}
        totalPages={totalPages}
        page={page}
        perPage={perPage}
      />
    </div>
  );
}
